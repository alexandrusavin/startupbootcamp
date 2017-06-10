for (let i = 15; i <= 60; i += 15) {
  minutes.push(<PickerIOS.Item key={i} value={i} label="Minutes"/>);
}

<Picker itemStyle={styles.pickerItem} selectedValue={0}>
  {minutes}
</Picker>
