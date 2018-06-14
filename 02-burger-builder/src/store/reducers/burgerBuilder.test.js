import * as actionTypes from '../actions/actionTypes';
import reducer from './burgerBuilder';


describe('========reducer========', () => {
    it('ADD_INGREDIENT', () => {
        expect(reducer({
                ingredients: {salad: 0},
                totalPrice: 5
            },
            {
                type: actionTypes.ADD_INGREDIENT,
                ingredientName: 'salad'
            }
        )).toEqual({
            ingredients: {'salad': 1},
            totalPrice: 5.5,
        });
    });

    it('REMOVE_INGREDIENT', () => {
        expect(reducer({
                ingredients: {
                    salad: 1,
                    bacon: 0,
                    cheese: 1,
                    meat: 0
                },
                totalPrice: 5.9
            },
            {
                type: actionTypes.REMOVE_INGREDIENT,
                ingredientName: 'cheese'

            }
        )).toEqual({
            ingredients: {
                salad: 1,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 5.5
        });
    });

    it('SET_INGREDIENTS', () => {
        expect(reducer(
            {
                ingredients: {
                    salad: 1,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                },
                totalPrice: 5.5
            },
            {
                type: actionTypes.SET_INGREDIENTS,
                ingredients: {
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                }
            }
        )).toEqual({
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 5,
            error: false
        });
    });

});


