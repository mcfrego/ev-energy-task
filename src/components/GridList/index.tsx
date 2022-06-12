import { FlatList, StyleSheet, Text, ViewStyle } from 'react-native'

import { GridItem } from '../'

export interface Props {
  title: string
  data: any | undefined
  onElementClick: (id: number) => void
  style?: ViewStyle
}

const GridList = function ({ title, data, onElementClick, style }: Props) {
  return (
    <FlatList
      style={style}
      ListHeaderComponent={<Text style={styles.headerText}>{title}</Text>}
      ListHeaderComponentStyle={styles.headerContainer}
      data={data}
      renderItem={({ item }) => <GridItem data={item} onElementClick={onElementClick} />}
      numColumns={2}
      columnWrapperStyle={styles.column}
      contentContainerStyle={styles.content}
    />
  )
}

export default GridList

const styles = StyleSheet.create({
  headerText: { fontSize: 16, fontWeight: '600' },
  headerContainer: { marginBottom: 20, alignSelf: 'flex-start' },
  column: { justifyContent: 'space-between' },
  content: {},
})
