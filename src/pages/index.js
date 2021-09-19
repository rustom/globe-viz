import * as React from 'react';
import styled from 'styled-components';
import Globe from 'globe.gl';
import { GlobalStyle } from '../styles';

const Container = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  window.onload = function () {
    // fetch('./static/countries.geojson')
    //   .then((res) => res.json())
    //   .then((countries) => {
    //     const world = Globe()
    //       .globeImageUrl(
    //         'https://unpkg.com/three-globe/example/img/earth-night.jpg'
    //       )
    //       .hexPolygonsData(countries.features)
    //       .polygonAltitude((feat) =>
    //         Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
    //       )(
    //       // // .pointAltitude('size')
    //       // .pointColor('color')
    //       document.getElementById('globeViz')
    //     );
    //   });
    fetch('./static/countries.geojson')
      .then((res) => res.json())
      .then((countries) => {
        const world = Globe()
          .globeImageUrl(
            'https://unpkg.com/three-globe/example/img/earth-dark.jpg'
          )
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.3)
          .hexPolygonColor(
            () =>
              `#${Math.round(Math.random() * Math.pow(2, 24))
                .toString(16)
                .padStart(6, '0')}`
          )
          .hexPolygonLabel(
            ({ properties: d }) => `
            <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            Population: <i>${d.POP_EST}</i>
          `
          )
          .polygon(document.getElementById('globeViz'));
      });
  };

  return (
    <Container>
      <GlobalStyle />
      <div id="globeViz" />
    </Container>
  );
}
