import React from 'react';
import Mock from './mock/Mock';
import * as FileLibrary from './components';

function renderArticles(articles) {
    if (articles.length > 0) {      
        return articles.map((article, index) => (
            <FileLibrary.ExperienceItem experience_blo={article}></FileLibrary.ExperienceItem>
        ));
    }
    else return [];
}

function Experience(){
    let {work_experience} = Mock;
    const articles = renderArticles(work_experience);
    return(
        <div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Work Experience</div>
                {articles}
            </div>
            </div>
    );
}
export default Experience;