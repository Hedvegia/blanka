import React, {Component} from 'react';
import styled, {ThemeProvider} from 'styled-components'

const ContentsContainer = styled.div`
    display: flex;
    position: absolute;
    top: 2em;
    background: #FFB9CC;
    color: #f8f9f8;
    border: 0px solid rgba(229, 127, 165, 0);
    border-radius: 0 5px 5px 0;
`;

const Contents = styled.ul`
  padding: 0;
  margin: 0;
  
  li {
    width: ${props => props.theme.open ? '220px' : '0px'};
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: ${props => props.theme.open ? '1.5em' : '0em'};
    list-style-type: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9em;
    cursor: pointer;
    :hover {
      background: rgba(140, 116, 130, 0.5)
    }
  }
`

const Box = styled.div`
  margin: 10px 0 10px 5px;
  width: 25px;
  right: 1.5em;
  top: 0.7em;
  border-left: 2px dotted #f8f9f8;
  
  .bicycleBox {
       position: relative;
       height: 100%;
       
      .fa-bicycle {
        transform: ${props => props.theme.up};
        position: absolute;
        top: ${props => props.theme.topMargin}
      }
  }
`

const listOfContent = [
    'Bevezetés',
    'Miskolc, a nyitott kapuk városa',
    'Statisztikai adatok',
    'Kerékpáros infrastruktúra Miskolcon',
    'A terepi felmérés',
    'Térképszerkesztés',
    'Összegzés',
    'Felhasznált irodalom',
    'Köszönetnyílvánítás'
]

export class Sidebar extends Component {
    state = {
        target: null,
        title: 'lorem0',
        top: 0,
        up: false,
        topMargin: 0,
        open: false
    }

    componentDidMount() {
        this.initialize();
        this.isVisible();

        window.addEventListener('scroll', () => {
            this.moveBicycle();
            this.initializeTitle();
        });
    }

    initialize = () => {
        setTimeout(() => {
            const topHeight = document.querySelector('#text').getBoundingClientRect().top

            if (topHeight < 0) {
                this.changeClasses("position: fixed;");
            }
        }, 1000);
    }

    isVisible = () => {
        const options = {
            root: null,
            rootMargin: '10% 0% -45% 0%',
            threshold: 0.1
        }

        const changeContent = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setState({target: entry.target.id});

                    if (entry.target.id === 'map') {
                        this.changeClasses("position: absolute;");
                    }
                }

                if (!entry.isIntersecting && entry.target.id === 'map' && this.state.target === 'ContentsContainer') {
                    this.changeClasses("position: fixed;");
                }
            })
        }
        const observer = new IntersectionObserver(changeContent, options);

        document.querySelectorAll('.Observe').forEach(targ => observer.observe(targ))
    }

    changeClasses = (newClasses) => {
        const contents = document.getElementById('ContentsContainer');

        contents.setAttribute("style", newClasses);
    }

    moveBicycle = () => {
        const fullHeight = document.querySelector('#text').getBoundingClientRect().height - document.querySelector('#footer').getBoundingClientRect().height - document.querySelector('.fas').getBoundingClientRect().height
        const topHeight = document.querySelector('#text').getBoundingClientRect().top

        if (window.pageYOffset > this.state.top && topHeight < 0 && (Math.abs(topHeight) / fullHeight) * 100 < 95) {
            this.setState({up: false, top: window.pageYOffset, topMargin: (Math.abs(topHeight) / fullHeight) * 100})
        } else if (window.pageYOffset < this.state.top && topHeight < 0 && (Math.abs(topHeight) / fullHeight) * 100 < 95) {
            this.setState({up: true, top: window.pageYOffset, topMargin: (Math.abs(topHeight) / fullHeight) * 100})
        }
    }

    initializeTitle = () => {
        const options = {
            root: null,
            rootMargin: '0% 0% -45% 0%',
            threshold: 0.9
        }

        const changeContent = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.target.id !== this.state.title) {
                    this.setState({title: entry.target.id})
                }
            })
        }
        const observer = new IntersectionObserver(changeContent, options);

        document.querySelectorAll('h2').forEach(targ => observer.observe(targ))
    }

    choseTitle = (id) => {
        this.setState({title: id, width: 0});
        this.props.move(`#${id}`)
    }

    render = () => {
        const theme = {
            up: this.state.up ? 'rotate(-90deg)' : 'rotate(90deg)',
            topMargin: `${this.state.topMargin}%`,
            open: this.state.open,
        }

        return <ThemeProvider theme={theme}>
            <ContentsContainer id="ContentsContainer" className="Observe"
                               onClick={() => this.setState({open: !this.state.open})}
                               onMouseLeave={() => this.setState({open: false})}>
                <Contents id="contents">
                    {listOfContent.map((title, index) => {
                        return `lorem${index}` === this.state.title
                            ? (
                                <li
                                    key={index}
                                    style={{background: 'rgba(140, 116, 130, 0.5)'}}
                                    onClick={() => this.choseTitle(`lorem${index}`)}
                                >
                                    {title}
                                </li>
                            )
                            : (
                                <li
                                    key={index}
                                    onClick={() => this.choseTitle(`lorem${index}`)}
                                >
                                    {title}
                                </li>
                            )
                    })}
                </Contents>
                <Box>
                    <div className="bicycleBox">
                        <i className="fas fa-bicycle"/>
                    </div>
                </Box>
            </ContentsContainer>
        </ThemeProvider>;
    }
}
