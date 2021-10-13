import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [
    { 
      title: 'Project 1',
      description: 'This is really really long description about this project'
    },
    { 
      title: 'Project 2',
      description: 'This is really really long description about this project'
    },
    { 
      title: 'Project 3',
      description: 'This is really really long description about this project'
    },
    { 
      title: 'Project 4',
      description: 'This is really really long description about this project'
    },
]
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit})=> (
        <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree> 
            </TitleContent>
            <Hr />
            <CardInfo>{description}</CardInfo>
            <div>
              <br />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, index) =>(
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
              <ExternalLinks href={source}>Source</ExternalLinks>
            </UtilityList>
        </BlogCard>
      ))}

    </GridContainer>

  </Section>
);

export default Projects;