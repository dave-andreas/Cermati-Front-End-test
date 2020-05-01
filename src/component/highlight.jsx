import React from 'react'
import Card from './card'
import {FaRegComments, FaChartLine, FaPaintBrush, FaCubes, FaBullhorn, FaPollH} from 'react-icons/fa'

const data = [
    {
        title:'Consult',
        txt:'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.',
        icon: () => <FaRegComments color='#958a89' size='30px' />
    },
    {
        title:'Design',
        txt:'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.',
        icon: () => <FaPaintBrush color='#958a89' size='30px' />
    },
    {
        title:'Develop',
        txt:'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.',
        icon: () => <FaCubes color='#958a89' size='30px' />
    },
    {
        title:'Marketing',
        txt:'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.',
        icon: () => <FaBullhorn color='#958a89' size='30px' />
    },
    {
        title:'Manage',
        txt:'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.',
        icon: () => <FaPollH color='#958a89' size='30px' />
    },
    {
        title:'Evolve',
        txt:'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.',
        icon: () => <FaChartLine color='#958a89' size='30px' />
    },
]

const Highlight = () => {
    return (
        <div style={{backgroundColor:'#e5e5e5',padding:20}}>
            <div style={{display:'flex',justifyContent:'center',marginTop:40,marginBottom:50}}>
                <div style={{textAlign:'center',maxWidth:720}}>
                    <h2>How Can I Help You?</h2>
                    <span style={{fontSize:20}}>Our work then targeted, best practices outcomes social innovation synergy.
                    Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                    program areas scale.</span>
                </div>
            </div>
            <div style={{display:'flex'}}>
                <div>
                    {data.map((val,index) => <Card key={index} title={val.title} icon={val.icon()} txt={val.txt} /> )}
                </div>
            </div>
        </div>
    )
}

export default Highlight