import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './assets/Header';
import Home from './assets/Home';
import ProjectGallery from './assets/ProjectGallery';
import Project from './assets/Project';
import Contact from './assets/Contact';
import Footer from './assets/Footer';

function App() {
  return (
    <Router>
      <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/projects/:id" element={<Project />} />


        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;




// import React from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

// import Header from './assets/Header';
// import Home from './assets/Home';
// import ProjectGallery from './assets/ProjectGallery';
// import Project from './assets/Project';
// import Contact from './assets/Contact';

// function App() {
//   return (
//     <Router>
//         <Header />
//         <Routes>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/projects">
//             <ProjectGallery />
//           </Route>
//           <Route path="/projects/:id">
//             <Project />
//           </Route>
//           <Route exact path="/contact">
//             <Contact />
//           </Route>
//         </Routes>

//     </Router>
//   );
// }

// export default App;
