'use client'
import { Html5QrcodeScanner, QrcodeErrorCallback, QrcodeSuccessCallback } from 'html5-qrcode';
import type { Html5QrcodeScannerConfig } from 'html5-qrcode/esm/html5-qrcode-scanner';
import { useEffect } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props: { fps?: number; qrbox?: number; aspectRatio?: number; disableFlip?: boolean; }) => {
    const config: { fps?: number; qrbox?: number; aspectRatio?: number; disableFlip?: boolean; } = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props: { verbose?: boolean; fps?: number; qrbox?: number; aspectRatio?: number; disableFlip?: boolean; qrCodeSuccessCallback: QrcodeSuccessCallback; qrCodeErrorCallback: QrcodeErrorCallback | undefined; }) => {


    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        if (!(props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is required callback.";
        }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config as Html5QrcodeScannerConfig, verbose);
        html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div onClick={handleClick} id={qrcodeRegionId} className="w-full" />
    );
};

export default Html5QrcodePlugin;