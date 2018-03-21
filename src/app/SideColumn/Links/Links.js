import React, { Component } from 'react'
import './Links.css'
import Link from './Link/Link'

class Links extends Component {

  render() {
    return (
        <div className="col-12 links-wrapper">
            <Link url={'https://www.facebook.com'} name={'facebook'} />
            <Link url={'https://www.twitter.com'} name={'twitter'} />
            <Link url={'https://plus.google.com/u/0/106678053106875963993'} name={'google'} />
            <Link url={'https://github.com/Kukurbitak'} name={'github'} />
        </div>
    )
  }
}

export default Links
