import React from 'react'
import DocProf from '../components/docprofile/DocProf'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocProf/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routes
