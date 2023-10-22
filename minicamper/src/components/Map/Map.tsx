import React, { FC } from 'react';
import {
    Map,
    FullscreenControl,
    GeolocationControl,
    TypeSelector,
    ZoomControl,
    Placemark,
    YMaps
} from '@pbe/react-yandex-maps';

const center = [53.849179, 27.708616];

const addressMarkerCenter = [53.849179, 27.708616];

interface MapProps {
}

//todo: zoom issue
const MapComponent: FC<MapProps> = () => {
    return (
        <YMaps
            query={{
                ns: "use-load-option",
                load: "Map,Placemark,control.FullscreenControl,control.GeolocationControl,control.TypeSelector,control.ZoomControl",
            }}
        >
            <Map defaultState={{center, zoom: 16}} width="100%" height="100%" controls={[
                'FullscreenControl',
                'GeolocationControl',
                'TypeSelector',
                'ZoomControl'
            ]}>
                <FullscreenControl/>
                <GeolocationControl/>
                <TypeSelector/>
                <ZoomControl/>
                <Placemark geometry={addressMarkerCenter}/>
            </Map>
        </YMaps>
    );
};

export default React.memo(MapComponent);
