import Group from './Grupo.js';
import ColorBox from './ColorBox';
import { months, calcButtonTextColor } from '../../tools.js';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h2 className='tituloPerfil'>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2 className='tituloPerfil'>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2 className='tituloPerfil'>Favourite Color:</h2> <ColorBox color={stored.color}/>
        </Group>
        <Group>
            <button
            className='buttonPerfil'
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}