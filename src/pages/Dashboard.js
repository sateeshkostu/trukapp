import React from "react";
import Card from 'react-bootstrap/Card';


const Dashboard = () => {
    return (
        <>
            {/* card is import from react bootstrap
            first take the two seperate divs and each div in two cards after taken the display flex */}
            <h1 className="page">Dashboard</h1>
            <div style={{display:'flex', marginBottom:'30px', }}>
            <Card style={{ width:'350px', height:'200px', left:'483px', top:'100px', borderColor:'#F58E26', }}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center',marginTop:'60px', marginRight:'50px'}}>Total Shippers</Card.Title>
                
                </Card.Body>
            </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Card style={{ width:'350px', height:'200px', left:'483px', top:'100px', borderColor:'#F58E26' }}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center', marginTop:'60px', marginRight:'50px'}}>Total Agents</Card.Title>
                
                </Card.Body>
            </Card>
            </div>
            <div style={{display:'flex',}}>
            <Card style={{ width:'350px', height:'200px', left:'483px', top:'100px', borderColor:'#F58E26' }}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center', marginTop:'60px', marginRight:'50px'}}>Total Transporters</Card.Title>
                
                </Card.Body>
            </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Card style={{ width:'350px', height:'200px', left:'483px', top:'100px', borderColor:'#F58E26' }}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center', marginTop:'60px', marginRight:'50px'}}>Total Fleet Owners</Card.Title>
                
                </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default Dashboard;