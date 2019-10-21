import React from 'react'
import { Route } from 'react-router'

import Navbar from '../Navbar'
import CoursePage from '../../pages/courses'
import CoursePreviewPage from '../../pages/coursePreview'
import PageSwithcer from '../pageSwitcher'

export default class Itc extends React.Component {
    
    render() {
        return (
          <div className="App">
            <Navbar />
            <PageSwithcer />
            <Route exec path="/courses" component={CoursePage} />
            <Route path='/course' component={CoursePreviewPage} />
          </div>
        )
    }

}