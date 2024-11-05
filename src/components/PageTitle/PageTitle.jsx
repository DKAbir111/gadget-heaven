import PropTypes from 'prop-types'
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function PageTitle({ title }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{title} | Gadget Heaven</title>
            </Helmet>
        </HelmetProvider>
    )
}
PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
}
