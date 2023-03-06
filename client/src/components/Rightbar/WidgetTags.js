import React from 'react'
import './RightSidebar';

function WidgetTags() {

  const tags=['c','css','express','firebase','react.js','javascript','node.js','c++','java'];

  return (
    <div className='widget-tags'>
      <h1>Watched Tags</h1>

      <div className='widget-tags-div'>
        {
          tags.map((tag)=>(
            <p key={tag}>{tag}</p>
          ))
        }
      </div>
    </div>
  )
}

export default WidgetTags