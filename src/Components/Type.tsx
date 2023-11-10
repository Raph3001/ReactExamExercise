import {Button, List, ListItem} from "@chakra-ui/react";

interface TypeProps {
    types: string[];
    onSelectType: (type: string) => void;
}

const Type = ({types, onSelectType}: TypeProps) => {

    return (
        <List>
            {types.map(t => ( <ListItem key={t}>
                <Button onClick={() => onSelectType(t)} fontSize='xl' variant={'link'}
                        marginY={'5px'}>{t}</Button>
            </ListItem>))}
        </List>
    );
};

export default Type;