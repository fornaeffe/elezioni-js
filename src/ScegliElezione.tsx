import List from "@mui/material/List"
import { Elezione, elezioni } from "./globals"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

export function ScegliElezione(props : {
    cambiaElezione : (key : Elezione) => void
}) {
    const lista = Array.from(elezioni).map(([key, value]) => <ListItem key={key}>
        <ListItemButton onClick={() => props.cambiaElezione(key)}>
            <ListItemText primary={value} />
        </ListItemButton>
    </ListItem>)

    return <List>
        {lista}
    </List>
}