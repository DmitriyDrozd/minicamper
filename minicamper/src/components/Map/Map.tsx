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
import { useApplicationContext } from '../../store/applicationContext';

interface MapProps {
}

//todo: zoom issue
const MapComponent: FC<MapProps> = () => {
    const { contacts: { addressCoordinates } } = useApplicationContext();

    return (
        <YMaps
            query={{
                apikey: 'ce3667c4-47aa-40c3-98ed-df981cb29bec',
                ns: "use-load-option",
                load: "Map,Placemark,control.FullscreenControl,control.GeolocationControl,control.TypeSelector,control.ZoomControl",
            }}
        >
            <Map defaultState={{center: addressCoordinates, zoom: 16}} width="100%" height="100%" controls={[
                'FullscreenControl',
                'GeolocationControl',
                'TypeSelector',
                'ZoomControl'
            ]}>
                <FullscreenControl/>
                <GeolocationControl/>
                <TypeSelector/>
                <ZoomControl/>
                <Placemark geometry={addressCoordinates}/>
            </Map>
        </YMaps>
    );
};

export default React.memo(MapComponent);
