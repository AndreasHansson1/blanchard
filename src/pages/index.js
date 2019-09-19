import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { ThemeProvider } from 'theme-ui';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import theme from '../gatsby-plugin-theme-ui';
import Layout from '../components/layout';
import HeroImage from '../components/HeroImage';
import Card from '../components/card/Card';
import TextOne from '../components/card/TextOne';
import TextTwo from '../components/card/TextTwo';
import SEO from '../components/seo';
import MapContainer from '../components/map/MapContainer';
import Gallery from '../components/Gallery';
import Divider from '../components/Divider';
import Booking from '../components/Booking';

const IndexPage = ({ data }) => {
  const cardArr = [];
  data.cardQuery.edges.map(image => cardArr.push(
    <Img
      fluid={image.node.childImageSharp.fluid}
      style={{ filter: 'sepia(0.2)' }}
    />,
  ));

  const HeroContainer = styled.div`
    width: 100%;
    position: relative;
  `;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <HeroContainer>
          <HeroImage />
        </HeroContainer>
        <Divider />
        <Card image={cardArr[1]}>
          <TextOne />
        </Card>
        <Divider />
        <Gallery images={data.galleryQuery.edges} />
        <Divider />
        <Card image={cardArr[0]}>
          <TextTwo />
        </Card>
        <Divider />
        <MapContainer />
        <Divider />
        <Booking />
      </Layout>
    </ThemeProvider>
  );
};

IndexPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default IndexPage;

export const query = graphql`
  query {
    cardQuery: allFile(filter: { relativeDirectory: { eq: "card-items" } }) {
      edges {
        node {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    galleryQuery: allFile(
      filter: { relativeDirectory: { eq: "gallery-items" } }
      sort: { fields: [id], order: DESC }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
