import { PureComponent } from 'react'
import Map, { Marker } from 'react-map-gl'
import markerImg from '@assets/dollarSign.svg'
import MAP_OPTIONS from '@constants/mapOptions'
import MapContext from '@contexts/mapContext'
import ATMS from '@mockData/map'

import * as styles from './style.module.scss'

class MapComponent extends PureComponent {
    static contextType = MapContext

    context: React.ContextType<typeof MapContext>

    render() {
        return (
            <div className={styles.map}>
                <Map {...MAP_OPTIONS}>
                    <>
                        {ATMS.filter(({ currencies }) => currencies.includes(this.context.searchingCurrency)).map(
                            ({ id, longitude, latitude }) => (
                                <Marker key={id} longitude={longitude} latitude={latitude}>
                                    <img alt='markerImg' src={markerImg} />
                                </Marker>
                            )
                        )}
                    </>
                </Map>
            </div>
        )
    }
}
export default MapComponent
