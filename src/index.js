import React from 'react'

import './styles.module.css'

export const ExampleComponent = class ResponsiveGrid extends React.Component {
  
  state = { numCols: 1 }

  containerRef = React.createRef()

  componentDidMount() {
    this.calculateNumColsPerRow()
    window.addEventListener('resize', () => this.calculateNumColsPerRow())
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  calculateNumColsPerRow() {
    const { minWidth, children } = this.props
    const numCols = Math.floor(this.containerRef.current.offsetWidth / minWidth)
    this.setState({ numCols: Math.min(numCols, children.length) })
  }

  render() {
    const { maxWidth, children, outerDivClassName } = this.props
    const { numCols } = this.state

    return (
      <div ref={this.containerRef} className='inner-div'>
        {
          children.map((child, index) => (
            <div 
              style={{ 
                width: 100/numCols + '%',
                maxWidth
              }} 
              className={outerDivClassName || ''}
              key={child.key || index}
            >
              {child}
            </div>
          ))
        }
      </div>
    )
  }
}