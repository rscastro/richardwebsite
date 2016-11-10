import './index.scss';

import React from 'react';
import Nav from '../ui-Nav';
import HomeHero from '../ui-HomeHero';
import ProjectHero from '../ui-ProjectHero';
import ProjectIntro from '../ui-ProjectIntro';
import Tagline from '../ui-Tagline';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
import Video from '../ui-Video';
import Carousel from '../ui-Carousel';
import WorkGrid from '../ui-WorkGrid';
import Footer from '../ui-Footer';

export default class AppContainer extends React.Component {
  static get propTypes() {
    return {appData: React.PropTypes.object};
  }

  render() {
    const {
      appData: {
        nav,
        homeHero,
        projectHero,
        tagline,
        sectionHeader1,
        sectionHeader2,
        textColumns,
        img,
        video,
        carousel,
        projects,
        projects: {
          projectDetails
        },
        footer
      }
    } = this.props;

    return (
      <div className="app-container">
        <ProjectHero data={projectHero} />
        <SectionHeader data={sectionHeader1} />
        <ProjectIntro data={projectDetails[1]} />
        <SectionHeader data={sectionHeader2} />
        <TextColumns data={textColumns} />

        <Tagline data={tagline} />
        <Nav data={nav} />

        <HomeHero data={homeHero} />
        <Image data={img} />
        <Video data={video} />
        <Carousel data={carousel} />
        <WorkGrid projects={projects} />
        <Footer data={footer} />
      </div>
    );
  }
}
