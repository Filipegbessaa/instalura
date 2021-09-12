import React from 'react'
import PropTypes from 'prop-types'
import FAQScreen from '../../src/components/screens/FAQScreen'
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';


export async function getStaticProps() {
    const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
        .then((respostaDoServer) => respostaDoServer.json())
        .then((respostaConvertida) => respostaConvertida.data);

    // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
    return {
        props: {
            faqCategories,
        },
    };
}

function FAQPage({ faqCategories }) {
    return (
        <FAQScreen faqCategories={faqCategories} />
    )
}
FAQPage.propTypes = {
    faqCategories: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
            description: PropTypes.string,
        }).isRequired
    ).isRequired,
}


export default websitePageHOC(FAQPage, {
    pageWrapperProps: {
        seoProps: {
            headTitle: 'Perguntas Frequentes',
        },
    },
});


