import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, image, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            image
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'referrer',
          content: 'origin'
        },
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:image',
          content: image
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        },
        {
          name: 'google-site-verification',
          content: 'zvNzPxdu3GJi-sG1jdHJNRSvvcRnEg_keZq9d3MGSW8'
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes'
        },
        {
          name: 'keywords',
          content:
            'champoluc apartment for rent, apartment for rent in champoluc, rent house in italian alps'
        }
      ].concat(meta)}
    >
      <link rel='canonical' href='https://blanchard.netlify.com/' />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)'
        href='/apple-launch-1125x2436.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)'
        href='/apple-launch-750x1334.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)'
        href='/apple-launch-1242x2208.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
        href='/apple-launch-640x1136.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)'
        href='/apple-launch-1536x2048.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)'
        href='/apple-launch-1668x2224.png'
      />
      <link
        rel='apple-touch-startup-image'
        media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
        href='/apple-launch-2048x2732.png'
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
