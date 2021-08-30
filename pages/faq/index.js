import React from 'react'
import PropTypes from 'prop-types'
import FAQScreen from '../../src/components/screens/FAQScreen'

export async function getStaticProps() {
    const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
        const response = await res.json();
        return response.data;
    });

    // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
    return {
        props: {
            faqCategories,
        },
    };
}

function FaqPage({ faqCategories }) {
    // const [faqCategories, setFaqCategories] = React.useState([]);

    // React.useEffect(() => {
    //   fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    //     const response = await res.json();
    //     return response.data;
    //   })
    //     .then((faqCategoriesFromServer) => {
    //       setFaqCategories(faqCategoriesFromServer);
    //     });
    // });
    return (
        <FAQScreen faqCategories={faqCategories} />
    )
}
FaqPage.propTypes = {
    faqCategories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            description: PropTypes.string,
        }).isRequired
    ).isRequired,
}

export default FaqPage



