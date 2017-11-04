/* eslint no-useless-escape: 0 */

import React from 'react'
import PropTypes from 'prop-types'

import EditWidgetChip from '../../EditWidgetChip'
import TextField from 'material-ui/TextField'
import appTheme, {
  widgetEditButtonHover
} from 'theme/default'

class AddBookmarkForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  _handleKeyPress (e) {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.stopPropagation()
        e.preventDefault()
        this.create()
      }
    }
  }

  openForm () {
    this.setState({
      open: true
    }, () => {
      this.focusInput()
    })
  }

  closeForm () {
    this.setState({
      open: false
    })
  }

  focusInput () {
    this.bookmarkNameTextField.focus()
  }

  checkUrl (url) {
    const isUrl = (s) => {
      var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
      return regexp.test(s)
    }

    if (!isUrl(url)) {
      return 'http://' + url
    }
    return url
  }

  create () {
    const name = this.bookmarkNameTextField.input.value
    const link = this.checkUrl(this.bLink.input.value)

    if (!name || !link) { return }

    this.props.addBookmark(name, link)
    this.bookmarkNameTextField.input.value = ''
    this.bLink.input.value = ''

    this.closeForm()
  }

  render () {
    const textField = {
      underlineStyle: {
        borderColor: appTheme.textField.underlineColor
      },
      underlineFocusStyle: {
        borderColor: widgetEditButtonHover
      },
      hintStyle: {
        color: appTheme.textField.underlineColor,
        fontSize: 14
      },
      inputStyle: {
        color: '#FFF',
        fontSize: 14
      },
      errorStyle: {
        color: appTheme.textField.underlineColor
      }
    }

    return (
      <EditWidgetChip
        open={this.state.open}
        widgetName={'Bookmarks'}
        onAddItemClick={this.openForm.bind(this)}
        onCancelAddItemClick={this.closeForm.bind(this)}
        onItemCreatedClick={this.create.bind(this)}
        widgetAddItemForm={
          <span
            key={'widget-add-form-elem'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: 10
            }}
          >
            <TextField
              ref={(input) => { this.bookmarkNameTextField = input }}
              onKeyPress={this._handleKeyPress.bind(this)}
              hintText='Ex: Google'
              style={textField.style}
              inputStyle={textField.inputStyle}
              hintStyle={textField.hintStyle}
              underlineStyle={textField.underlineStyle}
              underlineFocusStyle={textField.underlineFocusStyle}
            />
            <TextField
              ref={(input) => { this.bLink = input }}
              onKeyPress={this._handleKeyPress.bind(this)}
              hintText='Ex: https://www.google.com'
              style={textField.style}
              inputStyle={textField.inputStyle}
              hintStyle={textField.hintStyle}
              underlineStyle={textField.underlineStyle}
              underlineFocusStyle={textField.underlineFocusStyle}
            />
          </span>
        }
       />
    )
  }
}

AddBookmarkForm.propTypes = {
  addBookmark: PropTypes.func.isRequired
}

AddBookmarkForm.defaultProps = {
}

export default AddBookmarkForm
