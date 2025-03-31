import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import {
  close as closeCheckout,
  setCheckoutData
} from '../../../store/reducers/checkout'
import { open as openCart } from '../../../store/reducers/cart'
import { open as openPayment } from '../../../store/reducers/payment'
import { CheckoutContainer, Overlay, Sidebar, InlineFields } from './styles'
import { BtnCarrinho } from '../../generalComp/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

export const Checkout = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.checkout)
  const dispatch = useDispatch()

  const closeCheckoutHandler = () => {
    dispatch(closeCheckout())
  }

  const backToCartHandler = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const goToPaymentHandler = () => {
    dispatch(closeCheckout())
    dispatch(openPayment())
  }

  const form = useFormik({
    initialValues: {
      name: '',
      street: '',
      city: '',
      zip: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('O nome é obrigatório')
        .matches(
          /^[a-zA-ZáÁàÀâÂãÃéÉèÈêÊíÍìÌîÎôÔóÓòÒûÛçÇ\s]+$/,
          'O nome deve conter apenas letras'
        ),
      street: Yup.string().required('O endereço é obrigatório'),
      city: Yup.string()
        .required('A cidade é obrigatória')
        .matches(
          /^[a-zA-ZáÁàÀâÂãÃéÉèÈêÊíÍìÌîÎôÔóÓòÒûÛçÇ\s]+$/,
          'A cidade deve conter apenas letras'
        ),
      zip: Yup.string()
        .required('O CEP é obrigatório')
        .matches(/^\d{5}-\d{3}$/, 'O CEP deve seguir o formato 99999-999'),
      number: Yup.string()
        .required('O número é obrigatório')
        .matches(/^\d+$/, 'O número deve conter apenas dígitos'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      dispatch(setCheckoutData(values))
      goToPaymentHandler()
    }
  })

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCheckoutHandler} />
      <Sidebar>
        <h3>Entrega</h3>
        <form onSubmit={form.handleSubmit}>
          <label htmlFor="name">Quem irá receber</label>
          <input
            id="name"
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="text"
            className={form.touched.name && form.errors.name ? 'invalid' : ''}
          />
          <label htmlFor="street">Endereço</label>
          <input
            id="street"
            name="street"
            value={form.values.street}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="text"
            className={
              form.touched.street && form.errors.street ? 'invalid' : ''
            }
          />
          <label htmlFor="city">Cidade</label>
          <input
            id="city"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="text"
            className={form.touched.city && form.errors.city ? 'invalid' : ''}
          />
          <InlineFields>
            <div>
              <label htmlFor="zip">CEP</label>
              <InputMask
                id="zip"
                name="zip"
                mask="99999-999"
                value={form.values.zip}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={form.touched.zip && form.errors.zip ? 'invalid' : ''}
              >
                {(inputProps) => <input {...inputProps} type="text" />}
              </InputMask>
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <InputMask
                id="number"
                name="number"
                mask="9999999999"
                maskChar={null}
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={
                  form.touched.number && form.errors.number ? 'invalid' : ''
                }
              >
                {(inputProps) => <input {...inputProps} type="text" />}
              </InputMask>
            </div>
          </InlineFields>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input
            id="complement"
            name="complement"
            value={form.values.complement}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            type="text"
          />
          <BtnCarrinho title="Continuar" type="submit">
            {'Continuar com o pagamento'}
          </BtnCarrinho>
          <BtnCarrinho title="Voltar" type="button" onClick={backToCartHandler}>
            {'Voltar para o carrinho'}
          </BtnCarrinho>
        </form>
      </Sidebar>
    </CheckoutContainer>
  )
}
