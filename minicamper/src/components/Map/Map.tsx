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

const center = [53.848834,27.707675];

const addressMarkerCenter = [53.848834,27.707675];

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
