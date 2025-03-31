import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { RootReducer } from '../../../store'
import { close as closePayment } from '../../../store/reducers/payment'
import { open as openCheckout } from '../../../store/reducers/checkout'
import { clear as clearCart } from '../../../store/reducers/cart'
import {
  PaymentContainer,
  Overlay,
  Sidebar,
  InlineFields1,
  InlineFields2
} from './styles'
import { BtnCarrinho } from '../../generalComp/Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

export const Payment = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.payment)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const closePaymentHandler = () => {
    dispatch(closePayment())
    setSuccessMessage(null)
  }

  const backToCheckoutHandler = () => {
    dispatch(closePayment())
    dispatch(openCheckout())
  }

  const totalValue = items.reduce((acc, item) => acc + item.preco, 0)

  const form = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('O nome é obrigatório')
        .matches(
          /^[a-zA-ZáÁàÀâÂãÃéÉèÈêÊíÍìÌîÎôÔóÓòÒûÛçÇ\s]+$/,
          'O nome deve conter apenas letras'
        ),
      cardNumber: Yup.string()
        .required('O número do cartão é obrigatório')
        .matches(
          /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
          'O número do cartão deve ter 16 dígitos'
        ),
      cvv: Yup.string()
        .required('O CVV é obrigatório')
        .matches(/^\d{3}$/, 'O CVV deve ter 3 dígitos'),
      month: Yup.string()
        .required('O mês é obrigatório')
        .matches(/^(0[1-9]|1[0-2])$/, 'O mês deve ser entre 01 e 12'),
      year: Yup.string()
        .required('O ano é obrigatório')
        .matches(/^\d{2}$/, 'O ano deve ter 2 dígitos')
    }),
    onSubmit: () => {
      const orderId = `ORD${Math.floor(Math.random() * 10000)}`
      setSuccessMessage(orderId)
      form.resetForm()
      dispatch(clearCart())
    }
  })

  return (
    <PaymentContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closePaymentHandler} />
      <Sidebar>
        {successMessage ? (
          <div className="success-message">
            <h4>Pedido realizado - {successMessage}</h4>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </div>
        ) : (
          <>
            <h3>Pagamento - Valor a pagar R$ {totalValue.toFixed(2)}</h3>
            <form onSubmit={form.handleSubmit}>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                type="text"
                className={
                  form.touched.cardName && form.errors.cardName ? 'invalid' : ''
                }
              />
              <InlineFields1>
                <div>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    id="cardNumber"
                    name="cardNumber"
                    mask="9999 9999 9999 9999"
                    value={form.values.cardNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      form.touched.cardNumber && form.errors.cardNumber
                        ? 'invalid'
                        : ''
                    }
                  >
                    {(inputProps) => <input {...inputProps} type="text" />}
                  </InputMask>
                </div>
                <div>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    id="cvv"
                    name="cvv"
                    mask="999"
                    maskChar={null}
                    value={form.values.cvv}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      form.touched.cvv && form.errors.cvv ? 'invalid' : ''
                    }
                  >
                    {(inputProps) => <input {...inputProps} type="text" />}
                  </InputMask>
                </div>
              </InlineFields1>
              <InlineFields2>
                <div>
                  <label htmlFor="month">Mês de vencimento</label>
                  <InputMask
                    id="month"
                    name="month"
                    mask="99"
                    value={form.values.month}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      form.touched.month && form.errors.month ? 'invalid' : ''
                    }
                  >
                    {(inputProps) => <input {...inputProps} type="text" />}
                  </InputMask>
                </div>
                <div>
                  <label htmlFor="year">Ano de vencimento</label>
                  <InputMask
                    id="year"
                    name="year"
                    mask="99"
                    value={form.values.year}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={
                      form.touched.year && form.errors.year ? 'invalid' : ''
                    }
                  >
                    {(inputProps) => <input {...inputProps} type="text" />}
                  </InputMask>
                </div>
              </InlineFields2>
              <BtnCarrinho title="Finalizar" type="submit">
                {'Finalizar o pagamento'}
              </BtnCarrinho>
              <BtnCarrinho
                title="Voltar"
                type="button"
                onClick={backToCheckoutHandler}
              >
                {'Voltar para a edição de endereço'}
              </BtnCarrinho>
            </form>
          </>
        )}
      </Sidebar>
    </PaymentContainer>
  )
}
