import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Project, { ProjectProps } from '../components/project';
import ProjectInfo from '../content/projects.json';
import { h1, listBorder } from '../styles/common-styles';

export default function ProjectsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Projects - Simon Hoque</title>
      </Helmet>
      <h1 className={`${h1}`}>Projects</h1>
      <ul>
        {ProjectInfo.map((project: ProjectProps) => (
          <li className={listBorder}>
            <Project
              title={project.title}
              description={project.description}
              languages={project.languages}
              technologies={project.technologies}
              details={project.details}
              links={project.links}
            />
          </li>
        ))}
      </ul>
    </Layout>
  );
}
