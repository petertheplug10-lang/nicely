import { ApiError } from "./errors";
import { resolveApiUrl } from "./resolve-api-url";

export type RequestSearchParams = Record<
  string,
  string | number | boolean | undefined | null
>;

export type JsonRequestInit = Omit<RequestInit, "body"> & {
  /** Query string for GET (and other methods if needed). */
  searchParams?: RequestSearchParams;
  /** JSON body; sets Content-Type when present. */
  body?: unknown;
};

function appendSearchParams(path: string, searchParams?: RequestSearchParams) {
  if (!searchParams) return path;
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (value === undefined || value === null) continue;
    sp.set(key, String(value));
  }
  const q = sp.toString();
  return q ? `${path}?${q}` : path;
}

type ApiEnvelope<T> =
  | { status: "success"; data: T }
  | { status: "error"; message?: string; errors?: Record<string, string[]> };

/**
 * JSON request helper. Expects `{ status: "success", data: T }` and returns `T`.
 * Throws {@link ApiError} on network / non-JSON / API error payloads.
 */
export async function requestData<T>(
  path: string,
  init: JsonRequestInit = {},
): Promise<T> {
  const { searchParams, body, headers: initHeaders, ...rest } = init;
  const url = resolveApiUrl(appendSearchParams(path, searchParams));

  const headers = new Headers(initHeaders);
  let payload: BodyInit | undefined;
  if (body !== undefined) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
    payload = JSON.stringify(body);
  }

  const res = await fetch(url, {
    ...rest,
    headers,
    body: payload,
    cache: "no-store",
  });

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new ApiError("Invalid JSON response", res.status);
  }

  const envelope = json as ApiEnvelope<T> & Record<string, unknown>;

  if (!res.ok) {
    const message =
      typeof envelope.message === "string"
        ? envelope.message
        : res.statusText || "Request failed";
    throw new ApiError(message, res.status, json);
  }

  if (envelope.status === "error") {
    const message =
      typeof envelope.message === "string" ? envelope.message : "Request failed";
    throw new ApiError(message, res.status, json);
  }

  if (envelope.status !== "success" || !("data" in envelope)) {
    throw new ApiError("Unexpected response shape", res.status, json);
  }

  return envelope.data;
}

/**
 * Same transport as {@link requestData}, for endpoints that return fields
 * alongside `status: "success"` but **without** a `data` wrapper (e.g. reward check).
 */
export async function requestSuccessJson<T extends Record<string, unknown>>(
  path: string,
  init: JsonRequestInit = {},
): Promise<T> {
  const { searchParams, body, headers: initHeaders, ...rest } = init;
  const url = resolveApiUrl(appendSearchParams(path, searchParams));

  const headers = new Headers(initHeaders);
  let payload: BodyInit | undefined;
  if (body !== undefined) {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }
    payload = JSON.stringify(body);
  }

  const res = await fetch(url, {
    ...rest,
    headers,
    body: payload,
    cache: "no-store",
  });

  let json: unknown;
  try {
    json = await res.json();
  } catch {
    throw new ApiError("Invalid JSON response", res.status);
  }

  const envelope = json as { status?: string; message?: string } & T;

  if (!res.ok) {
    const message =
      typeof envelope.message === "string"
        ? envelope.message
        : res.statusText || "Request failed";
    throw new ApiError(message, res.status, json);
  }

  if (envelope.status === "error") {
    const message =
      typeof envelope.message === "string" ? envelope.message : "Request failed";
    throw new ApiError(message, res.status, json);
  }

  if (envelope.status !== "success") {
    throw new ApiError("Unexpected response shape", res.status, json);
  }

  return json as T;
}
