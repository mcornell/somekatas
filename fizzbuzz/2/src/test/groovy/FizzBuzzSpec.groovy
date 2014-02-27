/*
 * This Spock specification was auto generated by running 'gradle init --type groovy-library'
 * by 'mcornell' at '2/26/14 10:55 PM' with Gradle 1.11
 *
 * @author mcornell, @date 2/26/14 10:55 PM
 */

import spock.lang.Specification
import spock.lang.Unroll

class FizzBuzzSpec extends Specification{

	@Unroll
    def "Calculates FizzBuzz for #value"() {
        setup:
        def fizzbuzz = new FizzBuzz()
        expect:
        result == fizzbuzz.calculate(value)
        where:
        value || result
        1     || 1
        2     || 2
        3	  || 'fizz'
        5 	  || 'buzz'
    }
}
