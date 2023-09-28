import React, { FC } from 'react';
import {
    Map,
    FullscreenControl,
    GeolocationControl,
    TypeSelector,
    ZoomControl,
    Placemark
} from '@pbe/react-yandex-maps';

const center = [53.849179, 27.708616];

const addressMarkerCenter = [53.849179, 27.708616];

interface MapProps {}

const MapComponent: FC<MapProps> = () => {
    return (
        <Map defaultState={{ center, zoom: 16 }}>
            <FullscreenControl />
            <GeolocationControl />
            <TypeSelector />
            <ZoomControl />
            <Placemark geometry={addressMarkerCenter} />
        </Map>
    );
}

export default React.memo(MapComponent);
