import { useEffect } from 'react';
import { faDatabase, faProjectDiagram, faCompressArrowsAlt } from "@fortawesome/free-solid-svg-icons";

import WorkflowItem from '../components/WorkflowItem';

function Workflow() {
  useEffect(() => {
    const observerData = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-data');
        }
      });
    });
    const observerReduction = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-reduction');
        }
      });
    });
    const observerResults = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('workflow-icon-results');
        }
      });
    });
    
    observerData.observe(document.querySelector('#workflow-icon-data')!);
    observerReduction.observe(document.querySelector('#workflow-icon-reduction')!);
    observerResults.observe(document.querySelector('#workflow-icon-results')!);
})
  return (
    <div className="bg-body rounded border-bottom mb-5 text-center">
      <h3 className="display-6 text-center mb-5">How it works</h3>
      <div className="container text-center mx-auto text-muted d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <WorkflowItem id="data" icon={faDatabase} title={"Choose dataset"} description={"Choose a predefined dataset or upload your own."} />
        <WorkflowItem id="reduction" icon={faCompressArrowsAlt} title={"Project data"} description={"Apply a projection technique of your choice."} />
        <WorkflowItem id="results" icon={faProjectDiagram} title={"See results"} description={"See the path in the embeding space."} />
      </div>
    </div>
  );
}

export default Workflow;
