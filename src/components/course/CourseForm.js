import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';
import InputMask from 'react-input-mask';

export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>
            <Field
                type="text"
                name="nome"
                label="Nome"
                component={FieldInput}
            />
            <Field
                type="text"
                name="celular"
                label="Celular"
                component={FieldInput}
            />
            <Field
                type="text"
                name="sexo"
                label="Sexo"
                component={FieldInput}
            />            
            <Field
                type="text"
                name="data_nascimento"
                label="Data de Nascimento"
                component={FieldInput}
            />
            <Field
                type="text"
                name="peso"
                label="Peso"
                component={FieldInput}
            />
            <Field
                type="text"
                name="faixa"
                label="Faixa"
                component={FieldInput}
            />
            <Field
                type="text"
                name="grau"
                label="Grau"
                component={FieldInput}
            />
            <Field
                type="text"
                name="rg"
                label="RG"
                component={FieldInput}
            />
            <Field
                type="text"
                name="cpf"
                label="CPF"
                component={FieldInput}
            />
            <Field
                type="text"
                name="email"
                label="email"
                component={FieldInput}
            />
            <Field
                type="text"
                name="endereco"
                label="endereco"
                component={FieldInput}
            />
            <Field
                type="text"
                name="data_ultima_graduacao"
                label="Data da ultima graduação"
                component={FieldInput}
            />
            <Field
                type="text"
                name="observacoes"
                label="Observações"
                component={FieldInput}
            />
            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary">Salvar</button>

                {heading === 'Novo' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Limpar</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancelar</button>
            </div>
        </form>
    );
};





const validate = values => {
    const errors = {};

    if (!values.nome) {
        errors.nome = 'Campo obrigatório';
    }

    if (!values.celular) {
        errors.celular = 'Campo obrigatório';
    }
    return errors;
};



CourseForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};



export default reduxForm({
    form: 'CourseForm',
    validate
})(CourseForm);
