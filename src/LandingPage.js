import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LandingPage.css'; // Make sure to create this CSS file for additional styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

const stations = [
  { id: 1, name: 'Tokyo, 東京, とうきょう', circleText: 'JY01',  audio: process.env.PUBLIC_URL + '/Audio/01.mp3' },
  { id: 2, name: 'Kanda, 神田, かんだ', circleText: 'JY02', audio: process.env.PUBLIC_URL + '/Audio/02.mp3' },
  { id: 3, name: 'Akihabara, 秋葉原, あきはばら', circleText: 'JY03',  audio: process.env.PUBLIC_URL + '/Audio/03.mp3' },
  { id: 4, name: 'Okachimachi, 御徒町, おかちまち', circleText: 'JY04', audio: process.env.PUBLIC_URL + '/Audio/04.mp3' },
  { id: 5, name: 'Ueno, 上野, うえの', circleText: 'JY05',  audio: process.env.PUBLIC_URL + '/Audio/05.mp3' },
  { id: 6, name: 'Uguisudani, 鶯谷, うぐいすだに', circleText: 'JY06', audio: process.env.PUBLIC_URL + '/Audio/06.mp3' },
  { id: 7, name: 'Nippori, 日暮里, にっぽり', circleText: 'JY07',  audio: process.env.PUBLIC_URL + '/Audio/07.mp3' },
  { id: 8, name: 'Nishi-nippori, 西日暮里, にしにっぽり', circleText: 'JY08', audio: process.env.PUBLIC_URL + '/Audio/08.mp3' },
  { id: 9, name: 'Tabata, 田端, たばた', circleText: 'JY09',  audio: process.env.PUBLIC_URL + '/Audio/09.mp3' },
  { id: 10, name: 'Komagome, 駒込, こまごめ', circleText: 'JY10', audio: process.env.PUBLIC_URL + '/Audio/10.mp3' },
  { id: 11, name: 'Sugamo, 巣鴨, すがもえき', circleText: 'JY11',  audio: process.env.PUBLIC_URL + '/Audio/11.mp3' },
  { id: 12, name: 'Ōtsuka, 大塚, おおつか', circleText: 'JY12', audio: process.env.PUBLIC_URL + '/Audio/12.mp3' },
  { id: 13, name: 'Ikebukuro, 池袋, いけぶくろ', circleText: 'JY13',  audio: process.env.PUBLIC_URL + '/Audio/13.mp3' },
  { id: 14, name: 'Mejiro, 目白, めじろ2', circleText: 'JY14', audio: process.env.PUBLIC_URL + '/Audio/14.mp3' },
  { id: 15, name: 'Takadanobada, 高田馬場, たかだのばば', circleText: 'JY15',  audio: process.env.PUBLIC_URL + '/Audio/15.mp3' },
  { id: 16, name: 'Shin-okubo, 新大久保, しんおおくぼ', circleText: 'JY16',  audio: process.env.PUBLIC_URL + '/Audio/16.mp3' },
  { id: 17, name: 'Shinjuku, 新宿, しんじゅく', circleText: 'JY17', audio: process.env.PUBLIC_URL + '/Audio/17.mp3' },
  { id: 18, name: 'Yoyogi, 代々木, よよぎ', circleText: 'JY18',  audio: process.env.PUBLIC_URL + '/Audio/18.mp3' },
  { id: 19, name: 'Harajuku, 原宿, はらじゅく', circleText: 'JY19', audio: process.env.PUBLIC_URL + '/Audio/19.mp3' },
  { id: 20, name: 'Shibuya, 渋谷, しぶやえき', circleText: 'JY20',  audio: process.env.PUBLIC_URL + '/Audio/20.mp3' },
  { id: 21, name: 'Ebisu, 恵比寿, えびすえき', circleText: 'JY21', audio: process.env.PUBLIC_URL + '/Audio/21.mp3' },
  { id: 22, name: 'Meguro, 目黒, めぐろえき', circleText: 'JY22',  audio: process.env.PUBLIC_URL + '/Audio/22.mp3' },
  { id: 23, name: 'Gotanda, 五反田, ごたんだ', circleText: 'JY23', audio: process.env.PUBLIC_URL + '/Audio/23.mp3' },
  { id: 24, name: 'Ōsaki, 大崎, おおさき', circleText: 'JY24',  audio: process.env.PUBLIC_URL + '/Audio/24.mp3' },
  { id: 25, name: 'Shinagawa , 品川, しながわ', circleText: 'JY25', audio: process.env.PUBLIC_URL + '/Audio/25.mp3' },
  { id: 26, name: 'Tamachi, 田町, たまち', circleText: 'JY26',  audio: process.env.PUBLIC_URL + '/Audio/26.mp3' },
  { id: 27, name: 'Hamamatsuchō, 浜松町, はままつちょう', circleText: 'JY27', audio: process.env.PUBLIC_URL + '/Audio/27.mp3' },
  { id: 28, name: 'Shimbashi, 新橋, しんばし', circleText: 'JY28',  audio: process.env.PUBLIC_URL + '/Audio/28.mp3' },
  { id: 29, name: 'Yūrakuchō, 有楽町, ゆうらくちょう', circleText: 'JY29', audio: process.env.PUBLIC_URL + '/Audio/10.mp3' },
];

const LandingPage = () => {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStation, setCurrentStation] = useState(null);

  const toggleAudio = (audioPath, stationId) => {
    // If there's an audio playing and it's the same as the clicked one, pause it
    if (audio && isPlaying && currentStation === stationId) {
      audio.pause();
      setIsPlaying(false);
      setCurrentStation(null);
    } else {
      // If another audio is playing, pause it first
      if (audio) {
        audio.pause();
      }
      // Then play the new one
      const newAudio = new Audio(audioPath);
      setAudio(newAudio);
      newAudio.play();
      setIsPlaying(true);
      setCurrentStation(stationId);
    }
  };

  return (
    <div className="page-container">
    <Container className="my-5 d-flex justify-content-center">
      <Row className="mb-5">
        <Col xs={4}>
          <img src="images/Logo/Logo.png" alt="Logo" className="logo" />
        </Col>
        <Col xs={4} className="d-flex justify-content-center">
          {/* Intentionally left blank for alignment */}
        </Col>
        <Col xs={4}>
          {/* Intentionally left blank for alignment */}
        </Col>
      </Row>
      <div className="stations-container">
        <div className="vertical-line"></div>
        {stations.map((station, index) => (
  <Row key={station.id} className="align-items-center station-row mb-4">
    <Col xs={1}>
      {/* Intentionally left blank for alignment and vertical line */}
    </Col>
    <Col xs={4} className="d-flex justify-content-center">
              <div className="station-circle" onClick={() => toggleAudio(station.audio, station.id)}>
                <FontAwesomeIcon icon={isPlaying && currentStation === station.id ? faStop : faPlay} className="icon-left" />
                <span className="circle-text">{station.circleText}</span>
              </div>
            </Col>
            <Col xs={4}>
              <div className="station-names">
                {station.name.split(', ').map((namePart, i) => (
                  <div key={i}>{namePart}</div>
        ))}
      </div>
    </Col>
  </Row>
))}

      </div>
      </Container>   
    {/* Footer */}
    <footer className="text-center mt-auto py-3">
      <a href="https://github.com/igordinuzzi" className="footer-link" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> Made by Igor in <FontAwesomeIcon icon={faReact} />
      </a>
    </footer>
    </div>
  );
};

export default LandingPage;
