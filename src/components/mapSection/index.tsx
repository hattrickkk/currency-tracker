import { PureComponent } from 'react'
import MapComponent from '@components/map'
import MapContextProvider from '@components/mapContextProvider'
import Search from '@components/search'

class MapSection extends PureComponent {
    render() {
        return (
            <MapContextProvider>
                <>
                    <Search />
                    <MapComponent />
                </>
            </MapContextProvider>
        )
    }
}
export default MapSection
