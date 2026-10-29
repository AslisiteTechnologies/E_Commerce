import {describe,it,expect} from 'vitest';
import {products} from './catalog';
import {cartTotals,discountPercent,filterProducts,sortProducts,toggleCompare} from './commerce';
describe('storefront commerce logic',()=>{
 it('calculates discounts from the shown current and original prices',()=>{expect(discountPercent(100,125)).toBe(20);expect(discountPercent(100,90)).toBe(0);});
 it('calculates subtotal, savings and free delivery consistently',()=>{const p=products.find(x=>x.originalPrice)!;const totals=cartTotals([{id:p.id,qty:2}],products);expect(totals.subtotal).toBe(p.price*2);expect(totals.savings).toBe((p.originalPrice!-p.price)*2);expect(totals.total).toBe(totals.subtotal+totals.shipping);});
 it('filters by department, search, price and brand',()=>{const found=filterProducts(products,{category:'Audio',query:'arc',brand:['Nove','Aster'],maxPrice:100000});expect(found.length).toBeGreaterThan(0);expect(found.every(p=>p.category==='Audio'&&p.name.toLowerCase().includes('arc')&&p.price<=100000)).toBe(true);});
 it('sorts by price and rating without mutating the source',()=>{const source=products.slice(0,8),copy=[...source];expect(sortProducts(source,'price-asc')[0].price).toBe(Math.min(...source.map(p=>p.price)));expect(sortProducts(source,'rating')[0].rating).toBe(Math.max(...source.map(p=>p.rating)));expect(source).toEqual(copy);});
 it('limits comparison to four and allows removal',()=>{let ids:string[]=[];for(const p of products.slice(0,5))ids=toggleCompare(ids,p.id);expect(ids).toHaveLength(4);expect(toggleCompare(ids,ids[0])).toHaveLength(3);});
});
