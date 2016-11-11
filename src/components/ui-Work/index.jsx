import './index.scss';

const workData = require('../../assets/data/work-data.json');

import React, { Component } from 'react';
import ProjectHero from '../ui-ProjectHero';
import ProjectIntro from '../ui-ProjectIntro';
import SectionHeader from '../ui-SectionHeader';
import TextColumns from '../ui-TextColumns';
import Image from '../ui-Image';
import Video from '../ui-Video';
import Carousel from '../ui-Carousel';
import WorkGrid from '../ui-WorkGrid';


export default class Work extends Component {
  render() {

    console.log('workData :: ', workData);

    // const {
    //   // workData: {
    //   //   projectHero,
    //   //   sectionHeader1,
    //   //   sectionHeader2,
    //   //   textColumns,
    //   //   img,
    //   //   video,
    //   //   carousel,
    //   //   work,
    //   //   work: {
    //   //     projects
    //   //   }
    //   // }
    // } = this.props;

    console.log('workData.projectHero :: ', workData.projectHero);

    // const {
    //   workData: {
    //     projectHero,
    //     sectionHeader1,
    //     sectionHeader2,
    //     textColumns,
    //     img,
    //     video,
    //     carousel,
    //     work,
    //     work: {
    //       projects
    //     }
    //   }
    // } = this.props;


    return (
      <div className="work">
        <div className="wrapper">
          <ProjectHero data={workData.projectHero} />
          <SectionHeader data={workData.sectionHeader1} />
          {/* <ProjectIntro data={workData.projects[1]} /> */}
          <SectionHeader data={workData.sectionHeader2} />
          <TextColumns data={workData.textColumns} />
          <Image data={workData.img} />

          <Video data={workData.video} />
          <Carousel data={workData.carousel} />
          <WorkGrid work={workData.work} />
        </div>
      </div>
    );
  }
}
