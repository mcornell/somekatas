/*
 * This Spock specification was auto generated by running 'gradle init --type groovy-library'
 * by 'mcornell' at '5/17/14 11:04 AM' with Gradle 1.12
 *
 * @author mcornell, @date 5/17/14 11:04 AM
 */

import spock.lang.Specification

class FootballDataSpec extends Specification {

	def footballDataParser
    def dataFile

	void setup() {
		footballDataParser = new FootballDataParser()
        dataFile = this.getClass().getResource('/football.dat');
	}

    def "it can parse a line from the data file"() {
        given:
        def dataLine = '    4. Newcastle       38    21   8   9    74  -  52    71'
        when:
        def result = footballDataParser.parseLine(dataLine)
        then:
        result.name == 'Newcastle'
        result.goalsFor == 74
        result.goalsAgainst == 52
    }
/*
    def "it can read all of the temperature data for a day in the file"() {
        when:
        def result = weatherDataParser.readData(dataFile)
        then:
        result.size == 30
        result[0].day == 1
        result[28].day == 29
    }

    def "it can determine the day with the largest spread in temperature"() {
        when:
        def result = weatherDataParser.findLargestSpread(dataFile)
        then:
        result.day == 9
        result.spread == 54
    }
    */
}
