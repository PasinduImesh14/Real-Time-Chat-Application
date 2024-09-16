import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
    
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='5d5291e6-9ec2-467d-b353-547fe9d31a8c'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}} />
            </div>
    );
};

export default ChatsPage;