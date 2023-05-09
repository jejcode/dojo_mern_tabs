import React, {useState} from 'react'

const Tabs = (props) => {
    const btnStyle = {
        cursor: 'pointer'
    }
    const {currentTabsGroup, changeTabsGroup} = props

    const [selectedTab, setSelectedTab] = useState(currentTabsGroup[0])

    const switchTab = (index, e) => {
        setSelectedTab(currentTabsGroup[index])
    }
    const generateNewTabs = (choice) => {
        const options = {
        '0': [
            {label: 'About', content: `I'm a former teacher training to be a software developer`},
            {label: 'Skills', content: 'Customer experience, Project management, Team vision building'},
            {label: 'Contact', content: 'Call me at 555-5555'}
        ],
        '1': [
            {label: 'Dogs', content: 'Dogs are our best friends.'},
            {label: 'Cats', content: 'Cats make you earn their trust.'},
            {label: 'Birds', content: 'Birds poop on your table.'},
            {label: 'Fish', content: 'Fish are friends, not food.'}
        ],
        '2': [
            {label: 'HTML', content: 'To learn html, start with tags.'},
            {label: 'CSS', content: 'To learn CSS, start with inline styling.'},
            {label: 'Python', content: 'To learn python, go to Coding Dojo!'},
            {label: 'Javascript', content: 'To learn javascript, try google.'},
            {label: 'Algos', content: 'To learn algos, download the Dojo book.'}
        ]
        }
        changeTabsGroup(options[choice])
        setSelectedTab(options[choice])
    }
    return (
        <>
            <div className="row mb-4">
                {currentTabsGroup.map( (tabObj,index) => {
                    const eachTab = tabObj.label === selectedTab.label ?
                        <div key={ index } className={'col-auto me-2 py-2 px-4 text-center border text-bg-success'} style={ btnStyle }>{tabObj.label}</div>
                    :
                        <div onClick={(e) => switchTab(index,e)} key={ index } className={'col-auto me-2 py-2 px-4 text-center border'} style={ btnStyle }>{tabObj.label}</div>
                    return eachTab
                })}
            </div>
            <div className="row border p-2">
                <div className="col">
                    {selectedTab.content}
                </div>
            </div>
            <div className='row justify-content-end'>
                <div className="col-auto text-primary" onClick={() => generateNewTabs(0)}>0</div>
                <div className="col-auto text-primary" onClick={() => generateNewTabs(1)}>1</div>
                <div className="col-auto text-primary" onClick={() => generateNewTabs(2)}>2</div>
            </div>
        </>
    )
}

export default Tabs