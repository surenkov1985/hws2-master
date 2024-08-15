import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import s from './Stand.module.css'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import SuperButton from './common/c2-SuperButton/SuperButton'

const Stand = () => {
    const [stateForAllInputs, setValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)

    const onEnterHandler = () => {
        setError(
            stateForAllInputs.trim()
                ? ''
                : 'Error'
        )
        setValue('')
    }

    const onKeypressHandler = (e:  KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onEnterHandler()
        }
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError('')
    }
    const onChangeTextHandler = (value:string) => {
        setValue(value)
        setError('')
    }
    return (
        <div id={'hw4-stand'} className={s.stand}>
            <div className={s.inputs}>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-like-old'}
                        value={stateForAllInputs}
                        onChange={onChangeHandler}
                        onKeyPress={onKeypressHandler}
                    />
                </div>
                {/*инпут с ошибкой:*/}
                <div>
                    <SuperInputText
                        id={'hw4-super-input-with-error'}
                        value={stateForAllInputs}
                        onChangeText={onChangeTextHandler}
                        error={error}
                        onEnter={onEnterHandler}
                    />
                </div>
            </div>

            <div className={s.buttons}>
                {/*обычная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-default'}>
                        default
                    </SuperButton>
                </div>
                {/*красная кнопка:*/}
                <div>
                    <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                        red
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-disabled'}
                        xType={'red'}
                        disabled
                    >
                        disabled
                    </SuperButton>
                </div>
                {/*задизэйбленная кнопка:*/}
                <div>
                    <SuperButton
                        id={'hw4-super-button-secondary'}
                        xType={'secondary'}
                    >
                        secondary
                    </SuperButton>
                </div>
            </div>

            <div className={s.checkboxes}>
                {/*чекбокс с текстом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-with-text'}
                        checked={stateForAllCheckboxes}
                        onChangeChecked={setChecked}
                    >
                        some text
                    </SuperCheckbox>
                </div>
                {/*совместим со старым кодом:*/}
                <div>
                    <SuperCheckbox
                        id={'hw4-super-checkbox-like-old'}
                        checked={stateForAllCheckboxes}
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stand
