import React from 'react';
import {FormattedMessage as Translated} from 'react-intl';

import styles from './instagram.module.scss';
import ModuleLayout from '../layout/ModuleLayout';
import {useStaticQuery, graphql} from 'gatsby';
import Image, {FluidObject} from 'gatsby-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Edge {
  readonly node: {
    readonly id: string;
    readonly caption: string;
    readonly localFile: {
      readonly childImageSharp: {
        readonly fluid: FluidObject;
      };
    };
  };
}

interface InstagramQueryData {
  readonly allInstaNode: {
    readonly edges: Edge[];
  };
}

function HeaderWithIcon() {
  return (
    <div className={styles.headerWithIcon}>
      <img
        src={require(`../styling/icons/instagram-brown.svg`)}
        alt={`instagramm`}
      />
      <h1>
        <Translated id="instagram-headline" />
      </h1>
    </div>
  );
}

function Instagram(): JSX.Element {
  const query = graphql`
    query Instagram {
      allInstaNode {
        edges {
          node {
            id
            caption
            localFile {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `;

  const data: InstagramQueryData = useStaticQuery(query);

  console.log('data: ', data);

  const settings = {
    dots: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <ModuleLayout id="instagram">
      <HeaderWithIcon />
      <Slider {...settings}>
        {data.allInstaNode.edges.map((edge: Edge, index: number) => {
          return (
            edge.node.localFile && (
              <a href="https://www.instagram.com/paddelbude/">
                <Image
                  fluid={edge.node.localFile.childImageSharp.fluid}
                  key={index}
                  style={{margin: '1rem'}}
                />
              </a>
            )
          );
        })}
      </Slider>
    </ModuleLayout>
  );
}

export default Instagram;
