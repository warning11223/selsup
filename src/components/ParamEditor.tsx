import {FC, useState} from 'react';

export interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

export interface Model {
    paramValues: ParamValue[];
    colors: string[];
}

interface Props {
    params: Param[];
    model: Model;
}

const ParamEditor: FC<Props> = ({ params, model }) => {
    const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

    const handleChange = (paramId: number, value: string) => {
        setParamValues((prevParamValues) => {
            return prevParamValues.map((paramValue) =>
                paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
            );
        });
    };

    const getModel = (): Model => {
        return {
            paramValues: paramValues,
            colors: [],
        };
    };

    return (
        <div>
            <h2>Редактор параметров</h2>
            {params.map((param) => {
                const paramValue = paramValues.find((value) => value.paramId === param.id);
                return (
                    <div key={param.id} className="param-item">
                        <label>{param.name}</label>
                        <input
                            type="text"
                            value={paramValue ? paramValue.value : ''}
                            onChange={(e) => handleChange(param.id, e.target.value)}
                        />
                    </div>
                );
            })}
            <div>
                <button onClick={() => console.log(getModel())}>Получить модель</button>
            </div>
        </div>
    );
};

export default ParamEditor;
