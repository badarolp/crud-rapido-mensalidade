import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';
import SelectInput from '../common/SelectInput';


export const CourseForm = ({ handleSubmit, pristine, reset, submitting, heading, authors, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>
            
            {/*
            
            
            'data_nascimento',
            'peso',
            'faixa',
            'grau',
            'rg',
            'cpf',
            'email',
            'endereco',
            'data_ultima_graduacao',
            'observacoes',
            'sexo',
            */}
    
    
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
