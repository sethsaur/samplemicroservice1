package com.edifecs.scenario.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScenarioController {

    @RequestMapping(path = "/{name}", method = RequestMethod.GET)
    public String getAccountByName(@PathVariable String name) {
        return "scenario name " + name;
    }
}
