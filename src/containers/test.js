
  colorsTheme = () => {
    const {
      color, background,
    } = this.props
    let radioColor = ''
    switch (background) {
      case 'dark':
        return  radioColor = { background: '#343a40 !important', color: 'white'}
      case 'primary':
        return  radioColor = { background: '#007bff !important', color: 'white'}
      case 'secondary':
        return  radioColor = { background: '#6c757d !important', color: 'white'}
      case 'success':
        return  radioColor = { background: '#28a745 !important', color: 'white'}
      case 'danger':
        return  radioColor = { background: '#dc3545 !important', color: 'white'}
      case 'warning':
        return  radioColor = { background: '#ffc107 !important', color: 'black'}
      case 'info':
        return  radioColor = { background: '#17a2b8 !important', color: 'white'}
      default:
        return  radioColor = { background: '#343a40 !important', color: 'white'}
    }
  }
