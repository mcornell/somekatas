/*
 * This Spock specification was auto generated by running 'gradle init --type groovy-library'
 * by 'mcornell' at '5/17/14 11:04 AM' with Gradle 1.12
 *
 * @author mcornell, @date 5/17/14 11:04 AM
 */

import spock.lang.Specification

class WeatherDataSpec extends Specification {

	def weatherDataParser
    def dataFile

	void setup() {
		weatherDataParser = new WeatherDataParser()
        dataFile = this.getClass().getResource('/weather.dat');
	}

    def "it can parse a line from the data file"() {
        given:
        def dataLine = '   9  86    32*   59       6  61.5       0.00         240  7.6 220  12  6.0  78 46 1018.6'
        when:
        def result = weatherDataParser.parseLine(dataLine)
        then:
        result.day == 9
        result.maxTemp == 86
        result.minTemp == 32
        result.avgTemp == 59
    }

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
}
