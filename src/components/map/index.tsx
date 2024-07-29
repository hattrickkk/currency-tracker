import { PureComponent } from 'react'
import Map, { Marker } from 'react-map-gl'
import markerImg from '@assets/dollarSign.svg'
import MapContext from '@contexts/mapContext'
import ATMS from '@mockData/map'

class MapComponent extends PureComponent {
    static contextType = MapContext

    context: React.ContextType<typeof MapContext>

    render() {
        return (
            <Map
                initialViewState={{
                    longitude: 27.559,
                    latitude: 53.9006,
                    zoom: 12,
                }}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                style={{ width: '100vw', height: '50vh' }}
                mapStyle='mapbox://styles/mapbox/streets-v9'
            >
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
        )
    }
}
export default MapComponent
